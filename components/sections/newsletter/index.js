const Newsletter = props => {
  return (
    <div className="bg-grey-light w-full pb-10 pt-6">
      <div className="w-full mb-4">
        <h2 className="uppercase text-center p-4 md:text-xxl sm:text-lg xs:text-sm text-xxxl">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center sm:w-4/5 sm:mx-auto xs:w-4/5 xs:mx-auto">
          Subscribe to get all the latest news, exclusive offers and get a
          chance to win prizes.
        </p>
      </div>
      <div className="pb-4 w-3/5 mx-auto mt-2">
        <div className="w-full inline-flex mt-6 text-center flex justify-center">
          <input
            type="text"
            className="w-400 mr-2 p-3 shadow rounded"
            name=""
            id=""
          />
          <div className="p-3 rounded text-white bg-blue-darkest shadow-md w-200 text-center cursor-pointer hover:bg-grey-dark slow">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
