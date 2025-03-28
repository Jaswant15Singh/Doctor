import Navbar from "./Navbar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./stylesheets/Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-page">
        <div className="home">
          <div className="home-description">
            <h1>Welcome to Medico</h1>
            <p>
              health professional who practices medicine, focusing on promoting,
              maintaining, or restoring health through the study, diagnosis,
              prognosis, and treatment of diseases, injuries, and other physical
              and mental impairments
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="row g-4 home-cards">
          <div className="col">
            <div className="card-data">
              <h1>
                <FavoriteBorderIcon />
              </h1>
              <h3>Part1</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus fugit, officia dolores reiciendis aliquam quaerat.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-data">
              <h1>
                <FavoriteBorderIcon />
              </h1>
              <h3>Part1</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus fugit, officia dolores reiciendis aliquam quaerat.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-data">
              <h1>
                <FavoriteBorderIcon />
              </h1>
              <h3>Part1</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus fugit, officia dolores reiciendis aliquam quaerat.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card-data">
              <h1>
                <FavoriteBorderIcon />
              </h1>
              <h3>Part1</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus fugit, officia dolores reiciendis aliquam quaerat.
              </p>
            </div>
          </div>{" "}
        </div>
        <div className="home-emergency">
            <h3>In an emergency? Need help now?</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Make an Appointment</button>
        </div>
      </div>
    </>
  );
};

export default Home;
