const Newsletter = props => {
  let userInput = props.userInput;
  console.log(props);
  return (
    <div className="bg-grey-light w-full pb-10 pt-6">
      <div className="w-full mb-4">
        <h2 className="uppercase text-center p-4 md:text-xxl sm:text-lg xs:text-sm text-xxxl">
          Subscribe to our Newsletter
        </h2>
        <p className="text-center">
          Subscribe to get all the latest news, exclusive offers and get a
          chance to win prizes.
        </p>
      </div>
      <div className="pb-4 w-3/5 mx-auto mt-2">
        <div className="w-full inline-flex mt-6 text-center flex justify-center">
          {true ? (
            <form
              onSubmit={event => {
                event.preventDefault();
                // props.subscribeToNewsletter({ email: formData.get("email") });
                // props.setEmail({ email: null });
              }}
            >
              <input
                type="email"
                name="email"
                id="emailNewsletter"
                aria-label="email"
                required="required"
                className="w-400 mr-2 p-3 shadow rounded"
                value={userInput.emailNewsLetter}
                placeholder="Email address"
                onChange={e => {
                  console.log("input", e.target.value);
                  let userInput = props.userInput;
                  let _target = e.target;
                  let key = _target.id;
                  let value = _target.value;
                  props.setUserInput({
                    key,
                    value,
                    userInput
                  });
                  _target.setCustomValidity("");
                }}
                onInvalid={e => {
                  e.target.setCustomValidity(
                    'Must be valid email and should contain "@"'
                  );
                }}
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$"
              />
              <button
                aria-label="subscribe"
                type="submit"
                className="p-3 rounded text-white bg-blue-darkest shadow-md w-200 text-center cursor-pointer hover:bg-grey-dark slow"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-2xl font-bold text-red-light mt-8">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
