import React, { useState } from 'react';

const ActionButton = () => {
  const [action, setAction] = useState(null);

  const handleClick = () => {
    if (action === null) {
      setAction('Create');
    } else if (action === 'Create') {
      setAction('Update');
    } else if (action === 'Update') {
      setAction('Delete');
    } else if (action === 'Delete') {
      setAction(null); 
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        {action === null ? 'Start' : action}
      </button>
      {action && <p>Action sélectionnée : {action}</p>}
    </div>
  );
};

export default ActionButton;