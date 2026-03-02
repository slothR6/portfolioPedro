'use client';

import { Loader2, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LINKEDIN_URL, WHATSAPP_NUMBER } from '@/lib/utils/constants';

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact(): JSX.Element {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message: string };
      if (!response.ok) {
        throw new Error(data.message);
      }
      setStatus('success');
      setFeedback(data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Falha ao enviar mensagem.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Contact" title="Vamos construir algo excepcional" description="Entre em contato para discutir projeto, parceria ou consultoria técnica." />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={handleSubmit} className="glass rounded-2xl border border-border p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-muted">Nome</label>
                <input id="name" required value={form.name} onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))} className="focus-ring w-full rounded-xl border border-border bg-card px-4 py-2.5" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-muted">Email</label>
                <input id="email" type="email" required value={form.email} onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))} className="focus-ring w-full rounded-xl border border-border bg-card px-4 py-2.5" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-muted">Mensagem</label>
                <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))} className="focus-ring w-full rounded-xl border border-border bg-card px-4 py-2.5" />
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <Button type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span className="ml-2">Enviar</span>
              </Button>
              {feedback ? <p className="text-sm text-muted">{feedback}</p> : null}
            </div>
          </form>

          <aside className="glass rounded-2xl border border-border p-6">
            <h3 className="text-xl font-semibold">Redes e contato rápido</h3>
            <p className="mt-2 text-muted">Prefere um canal direto? Use os links abaixo.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a className="focus-ring rounded-xl border border-border bg-card px-4 py-2.5 hover:border-accent-from/50" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="focus-ring rounded-xl border border-border bg-card px-4 py-2.5 hover:border-accent-to/50" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
