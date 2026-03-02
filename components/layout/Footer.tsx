import { Container } from '@/components/ui/Container';

export function Footer(): JSX.Element {
  return (
    <footer className="pb-8 pt-12">
      <Container>
        <p className="text-center text-sm text-muted">© {new Date().getFullYear()} Pedro Portfolio. Crafted with precision.</p>
      </Container>
    </footer>
  );
}
