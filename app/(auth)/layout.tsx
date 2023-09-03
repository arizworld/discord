const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-zinc-700 h-full">
      {children}
    </div>
  );
}

export default AuthLayout;