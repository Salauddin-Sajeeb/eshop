const Accordian = () => {
  return (
    <div className="mt-10 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          How can i order?
        </div>
        <div className="collapse-content">
          <p>After login you can buy product</p>
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
      <section className="contact my-10 ">

        <h1 className="heading fw-bolder fs-2 text mb-5 mx-auto ">Ask Us Anything </h1>

        <form action="" >
          <div className="contact-form">
            <div className="name">
              <input type="text" name="from_name" className="input-name" placeholder="Enter Your name" />

            </div>
            <input type="email" name="email" className="input-email" placeholder="your email" />
            <textarea className="message" name="message" id="" placeholder="message" cols="30" rows="10"></textarea>
            <button className="btn btn-success rounded-pill text-white">Contact Us</button> <br />

          </div>
        </form>

      </section>

    </div>
  );
};

export default Accordian;
