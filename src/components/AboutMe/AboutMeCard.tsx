import { faSchool, faMinus, faEnvelope, faMapLocationDot, faBookAtlas, faGlobe, faCloud, faUserSecret } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import websitepfp from '/Users/Kevin Chau/Desktop/Personal_Web/react-personal-web/src/assets/websitepfp.jpg'


export const AboutMeCard = () => {
    return <div>
      <div className="bg-white w-[600px] h-[400px] border border-black rounded-md flex">
        <div className=" w-1/2 h-full flex flex-col justify-center items-center">
          <div className="border border-black rounded-sm">
            <img
              className="h-[300px] w-[230px]"
              src={websitepfp}
            ></img>
          </div>
          <p className="mt-2">hello from the lady and i!</p>
        </div>
        <div className="w-1/2 h-full flex flex-col items-start pl-6 justify-evenly">
          <h1 className="font-bold font-mono text-3xl">Kevin Chau</h1>

          <div className="mt-[-2rem]">
            <p>
              <FontAwesomeIcon icon={faSchool} />{" "}
              <FontAwesomeIcon icon={faMinus} />{" "}
              <span>University of Delaware</span>
            </p>
            <p className="mt-2">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
              <FontAwesomeIcon icon={faMinus} />{" "}
              <span>kevin.chau613@gmail.com</span>
            </p>
            <p className="mt-2">
              <FontAwesomeIcon
                icon={faMapLocationDot}
                size="lg"
                className="ml-[-1px]"
              />{" "}
              <FontAwesomeIcon icon={faMinus} /> <span>Wilmington, DE</span>
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faBookAtlas} />{" "}
            <span>Academic Interests</span>
            <div className="ml-5 mt-1">
              <p>
                {" "}
                <FontAwesomeIcon icon={faGlobe} /> Web Development
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCloud}
                  size="sm"
                  className="mr-[-3px]"
                />{" "}
                Cloud Engineering
              </p>
              <p>
                <FontAwesomeIcon icon={faUserSecret} /> Cybersecurity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
}