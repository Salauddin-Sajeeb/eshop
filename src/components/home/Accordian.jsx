const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can i order?
        </div>
        <div className="collapse-content">
          <p>After login you can busy product</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          what are the entry requirement?
        </div>
        <div className="collapse-content">
          <p>Its almost free!</p>
        </div>
      </div>

    </div>
  );
};

export default Accordian;
