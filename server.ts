import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // API Routes First
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Gemini AI Chat / Assistance Endpoint
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { message, history, context } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Message is required' });
      }

      if (!apiKey) {
        console.warn('GEMINI_API_KEY is not configured.');
        return res.json({
          reply: `Hello ${context?.studentName || 'Student'}! I am your **Apex Smart Connect AI Assistant**.\n\n* **Upcoming Deadlines**: DSA Assignment due Oct 18, DBMS Practical on Oct 15.\n* **Faculty Access**: Prof. A. Sharma is in Room 302 (Mon & Wed 3-5 PM).\n\nTo enable full AI queries, ensure GEMINI_API_KEY is configured in your project settings.`,
          sources: ['Apex Offline Cache', 'Academic Handbook 2024-25'],
          suggestedPrompts: [
            'When is the next DBMS practical exam?',
            'Where is the Central Digital Library?',
            'How to reach Computer Science Block?'
          ]
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      const systemInstruction = `You are the Apex Smart Connect AI Assistant for Apex Institute of Technology (AIT).
You are an intelligent, empathetic, and academically precise assistant for engineering college students, faculty, and staff.

You can answer ANY user questions, including:
1. Academic topics across Computer Science, Data Structures & Algorithms, DBMS, Artificial Intelligence, Networks, Web Development, Mathematics, etc.
2. Explaining concepts with simple analogies, code snippets, step-by-step math, and revision summaries.
3. Apex Tech campus guidance: Academic Block A & B, Central Digital Library (8 AM - 11 PM), Computing Center (CC-2), Lab-3B, Amphitheater, Hostels, Cafeteria.
4. Active semester deadlines: DBMS Practical Exam (Oct 15, 10:00 AM, Lab-3B), DSA Graph Theory Assignment (Due Oct 18, 11:59 PM), AI Heuristic Search Quiz (Oct 22, 2:00 PM).
5. Faculty information: Prof. A. Sharma (DSA / Room 302, Mon & Wed 3-5 PM), Dr. R. Desai (DBMS / HOD Room 204), Prof. M. Patel (AI / Lab CC-2).
6. Career, Gate preparation, internships, and general college advice.
7. Any general question or prompt asked by the user in a polite, helpful, and structured manner.

Always format responses using clean Markdown with bold keywords, bullet points, and code blocks where helpful. Be encouraging, precise, and polite.`;

      // Build conversation contents
      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history) && history.length > 0) {
        for (const item of history.slice(-8)) {
          if (item.text && (item.role === 'user' || item.role === 'model')) {
            contents.push({
              role: item.role,
              parts: [{ text: item.text }]
            });
          }
        }
      }

      // Add current message
      contents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      // Priority list of models
      const candidateModels = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.5-pro', 'gemini-3.7-flash'];
      let reply: string | undefined;

      for (const modelName of candidateModels) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents,
            config: {
              systemInstruction,
              temperature: 0.7,
            }
          });

          if (response.text) {
            reply = response.text;
            break;
          }
        } catch (modelErr: any) {
          console.warn(`Model ${modelName} call failed:`, modelErr?.message || modelErr);
        }
      }

      if (!reply) {
        reply = `I am your **Apex Academic Assistant**. I received your query: "${message}".\n\n* **Upcoming Academic Milestone**: DBMS Practical Exam (Oct 15, 10:00 AM, Lab-3B)\n* **DSA Assignment**: Due Oct 18 before 11:59 PM.\n\nPlease ask any specific course concept or campus query and I will assist you!`;
      }

      res.json({
        reply,
        sources: ['Apex Academic Portal', 'Curriculum Syllabus 2024-25', 'Campus Knowledge Base'],
        suggestedPrompts: [
          'Explain Dijkstra algorithm in short',
          'Give 3 key tips for DBMS Practical exam',
          'Where is the Central Digital Library?',
          'How do I book a doubt session with Prof. Sharma?'
        ]
      });
    } catch (err: any) {
      console.error('Gemini handler error:', err);
      res.status(500).json({
        error: 'Failed to generate AI response',
        details: err?.message || 'Server error'
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Apex Smart Connect Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
