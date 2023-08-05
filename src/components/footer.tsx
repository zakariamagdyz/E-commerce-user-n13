import React from "react";

const Fotoer = () => {
  return (
    <div className="border-t bg-white">
      <section className="container py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} FakeStoreNameA. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default Fotoer;
