
const Footer2 = () => {
  const currentYear = new Date().getFullYear();

  return (
        <div className="max-w-[1400px] bg-[var(--clr-heading)] mx-auto px-3 md:px-8 lg:px-10">
          <h5 className="text-[var(--clr-white)] text-center p-4">
            Copyright © CulinaryCloud. All rights reserved, {currentYear}
          </h5>
        </div>
  );
};

export default Footer2;