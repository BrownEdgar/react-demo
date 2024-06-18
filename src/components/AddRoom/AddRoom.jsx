import "./AddRoom.css"
function AddRoom() {
    return (
      <section className="Container">
        <h5 className="Container_title">
        100 day risk-free trial
        </h5>
        <div className="Container_body">
          <div className="Container_box">
            <img className="Container_box_img" src="./images/addRoom/FreeShipping" alt="" />
            <p className="Container_img_name">Free Shipping</p>
          </div>
          <div className="Container_box">
            <img className="Container_box_img" src="./images/addRoom/PlugPlay" alt="" />
            <p className="Container_img_name">Plug & PLay</p>
          </div>
          <div className="Container_box">
            <img className="Container_box_img" src="./images/addRoom/FreeReturns" alt="" />
            <p className="Container_img_name">Free Returns</p>
          </div>
        </div>
        <button className="Containner_button">GET A ROOM</button>
        <p className="Container_end">Terms & Conditions apply</p>
      </section>
    );
  }
  export default AddRoom;