/* Original CSS phone mockup — demonstrates the Mekida digital-menu concept.
   This is a design demonstration, not a screenshot of the real app. */
export default function PhoneMockup() {
  return (
    <div className="phone" role="img" aria-label="Phone mockup demonstrating the Mekida digital menu layout — sample interface, not a real screenshot">
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="phone__status">
          <span>9:41</span>
          <span>▮▮▯ ⚡</span>
        </div>
        <div className="phone__head">
          <div className="hotel">MEKIDA</div>
          <div className="sub">Hotel · Digital Menu</div>
        </div>
        <div className="phone__cats">
          <span className="is-on">Breakfast</span>
          <span>Coffee</span>
          <span>Traditional</span>
          <span>Desserts</span>
        </div>
        <div className="phone__items">
          <div className="phone__item">
            <span className="phone__thumb" />
            <span className="phone__meta">
              <span className="name">Sample item — full breakfast</span>
              <span className="price">ETB ······</span>
            </span>
          </div>
          <div className="phone__item">
            <span className="phone__thumb" />
            <span className="phone__meta">
              <span className="name">Sample item — specialty coffee</span>
              <span className="price">ETB ······</span>
            </span>
          </div>
        </div>
        <div className="phone__foot">Scanned from your table</div>
      </div>
    </div>
  );
}
