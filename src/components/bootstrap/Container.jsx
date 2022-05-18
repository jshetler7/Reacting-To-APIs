export default function Container({ className = "", children, ...rest }) {
    return (
      <main className={`container ${className}`} {...rest}>
        {children}
      </main>
    );
  }
  