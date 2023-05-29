import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-5">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-3 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p>© Evogym All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
