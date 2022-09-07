
function Footer(){

let date = new Date();

return(<footer className="footer">
  {" "}
  <p className="footer p" >copyright {date.getFullYear()}</p>{" "}
</footer>);
}

export default Footer;