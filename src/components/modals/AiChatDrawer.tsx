import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, UserProfile } from '../../types';

interface AiChatDrawerProps {
  user: UserProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const AiChatDrawer: React.FC<AiChatDrawerProps> = ({ user, isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: `Hello ${user.name.split(' ')[0]}! I am your **SSGM Smart Connect AI Assistant**.\n\nI can help you with your Semester 6 coursework (*DSA*, *DBMS*, *Artificial Intelligence*), exam schedules, faculty office hours, campus locations, and study notes.\n\nWhat would you like to explore today?`,
      timestamp: 'Just now',
      suggestedPrompts: [
        'What exams are coming up this month?',
        'Give a quick recap of BCNF in DBMS',
        'When is Prof. Sharma available for doubts?',
        'Where is the Central Digital Library?'
      ]
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputPrompt;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      // Build history excluding greeting
      const historyPayload = messages
        .filter((m) => m.id !== 'msg-init')
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text
        }));

      const res = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
          context: {
            studentName: user.name,
            semester: user.semester,
            department: user.department,
            studentId: user.studentId
          }
        })
      });

      if (!res.ok) {
        throw new Error(`API response status: ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "Here's the response for your query.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: data.sources || ['SSGM Academic Portal', 'Knowledge Base'],
        suggestedPrompts: data.suggestedPrompts || [
          'Explain this further',
          'Give an example problem',
          'Show related syllabus topics'
        ]
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const fallbackMsg: ChatMessage = {
        id: `ai-err-${Date.now()}`,
        sender: 'assistant',
        text: `I had trouble connecting to the network right now. Please try asking again in a moment.\n\n*Your query was:* "${text}"`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sources: ['Connection Notice'],
        suggestedPrompts: [
          'Retry question',
          'What are upcoming deadlines?',
          'Where is Lab-3B located?'
        ]
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-lg bg-surface flex flex-col h-full shadow-2xl border-l border-outline-variant/40 z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-xs">
              <span className="material-symbols-outlined text-xl" data-icon="psychology">
                psychology
              </span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-headline-md text-base font-bold text-on-surface">SSGM AI Assistant</h3>
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-label-sm font-bold px-2 py-0.5 rounded-full">
                  Gemini 2.5 Flash
                </span>
              </div>
              <p className="text-[11px] font-body-md text-on-surface-variant">Syllabus, Exams &amp; Campus Guide</p>
            </div>
          </div>

          <button
            id="btn-close-ai-drawer"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant"
            title="Close Assistant"
          >
            <span className="material-symbols-outlined" data-icon="close">close</span>
          </button>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl p-4 text-xs md:text-sm font-body-md shadow-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-primary text-on-primary rounded-br-xs'
                    : 'bg-surface-container-lowest border border-outline-variant/50 text-on-surface rounded-bl-xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-outline-variant/30 flex flex-wrap items-center gap-1.5 text-[10px] font-label-sm text-outline">
                    <span>Sources:</span>
                    {msg.sources.map((src, i) => (
                      <span key={i} className="bg-surface-container px-1.5 py-0.5 rounded text-on-surface-variant">
                        {src}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="text-[10px] font-label-sm text-outline mt-1 px-1">
                {msg.timestamp}
              </span>

              {/* Suggestions chips */}
              {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && msg === messages[messages.length - 1] && (
                <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                  {msg.suggestedPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(prompt)}
                      className="text-[11px] font-label-md bg-surface-container-low hover:bg-surface-container text-primary border border-outline-variant/40 px-2.5 py-1 rounded-full text-left transition-all hover:scale-102"
                    >
                      {prompt} →
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 p-3 bg-surface-container-lowest rounded-2xl border border-outline-variant/40 max-w-[70%]">
              <span className="material-symbols-outlined text-tertiary animate-spin text-base" data-icon="progress_activity">
                progress_activity
              </span>
              <span className="text-xs font-label-md text-on-surface-variant">
                Consulting SSGM Academic Knowledge Base...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-surface-container-lowest border-t border-outline-variant/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              id="input-ai-chat"
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask about courses, exams, campus spots..."
              className="flex-1 px-3.5 py-2.5 bg-surface border border-outline-variant/60 rounded-xl text-xs md:text-sm font-body-md focus:outline-none focus:ring-2 focus:ring-tertiary focus:border-transparent transition-all"
            />
            <button
              id="btn-send-ai-chat"
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="p-2.5 rounded-xl bg-tertiary text-on-tertiary hover:bg-tertiary/90 disabled:opacity-50 transition-colors flex items-center justify-center shadow-xs"
              title="Send message"
            >
              <span className="material-symbols-outlined text-xl" data-icon="send">send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
