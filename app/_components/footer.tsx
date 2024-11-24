const Footer = () => {
  return (
    <footer className="mt-8 w-full bg-gray-800 py-4 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kelvin Charles Cruz. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
