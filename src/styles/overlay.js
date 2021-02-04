const overlay = {
  position: 'absolute',
  top: '100%',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  borderRadius: '10px',
  transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
};

const isShown = {
  transform: 'translate(0%, -100%)',
  pointerEvents: 'auto',
};

export { overlay, isShown };
