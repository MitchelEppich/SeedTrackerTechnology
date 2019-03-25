import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const PopupMessage = props => {
  let _company = props.misc.company;
  if (_company == null) return <div />;
  return (
    <div className="absolute pin-r pin-t mt-32 mr-12 xs:mr-0 sm:mr-0">
      <div className="w-400 sm:w-7/8 xs:w-7/8 mx-auto bg-white shadow-md">
        <p className="bg-yellow-dark text-center text-lg font-bold uppercase p-2">
          Welcome to Seed Tracker
        </p>
        <p className="mt-2 p-1 px-8 text-justify">
          You are using an authentic STT promotional number from{" "}
          <span className="capitalize">{props.misc.company.name}</span>. We are
          working with{" "}
          <span className="capitalize">{props.misc.company.name}</span> to allow
          you, the customer, to be ensured you're receiving a quality product.
          You can purchase more of this seed at{" "}
          <a
            target="_blank"
            href={`http://${props.misc.company.website}`}
            className="text-blue-purple hover:text-grey-dark underline text-shadow"
          >
            http://{props.misc.company.website}
            <FontAwesomeIcon icon={faExternalLinkAlt} className="mx-1 fa-sm" />
          </a>
        </p>
        <p
          onClick={() => {
            props.setFocusLocation({ index: null });
          }}
          className="text-xs text-left p-2 ml-4"
        >
          * Promotional products have limited access to seed information.
        </p>
      </div>
    </div>
  );
};

export default PopupMessage;
