const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text/5 border-t border-text/10 py-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <p className="text-sm text-text/60 font-light">
          © {currentYear} Louhaichi Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
