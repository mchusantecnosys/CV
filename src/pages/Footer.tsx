import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative w-screen-1/2 bg-secondary text-center py-8">
      <div className="container mx-auto">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with ❤️ using Next.js and Tailwind CSS.
        </p>
        <Link
            href="https://www.linkedin.com/in/mario-chusan-p/"
            className="text-sm text-muted-foreground mt-6"
          >
            mchusan
          </Link>
      </div>
    </footer>
  );
}