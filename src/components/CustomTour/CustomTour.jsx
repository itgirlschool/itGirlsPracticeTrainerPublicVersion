import Tour from 'reactour';
import './CustomTour.scss';

export default function CustomTour({
  steps,
  setOpenModal,
  isTourActive,
  setIsTourActive,
}) {
  const handleTourClose = () => {
    setIsTourActive(false);
    setOpenModal(true);
  };

  return (
    <Tour
      steps={steps}
      isOpen={isTourActive}
      onRequestClose={handleTourClose}
      className='helper'
      rounded={10}
    />
  );
}
