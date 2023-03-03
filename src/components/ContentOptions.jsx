import { HashLink as Link } from "react-router-hash-link";

function ContentOptions() {
  // const [click, setClick] = useState(false)
  // const handleClick = () => setClick(!click)

  // const closeMenu = () => setClick(false)

  return (
    <div className="contentOptions">
      <div className="contentSelected">
        <h2>
          <Link to="#projects" smooth>
            Projects
          </Link>
        </h2>
        <h2>
          <Link to="#exp" smooth>
            Experience
          </Link>
        </h2>
        <h2>
          <Link to="#contact" smooth>
            Contact
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default ContentOptions;
