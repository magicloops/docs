import React, {ReactNode} from 'react';

interface TagProps {
    children: ReactNode;  
    color: string;        
  }
  
  // Define the component with props typing
  export default function Tag({ children, color }: TagProps) {
    return (
      <span
        style={{
          backgroundColor: color,
          borderRadius: '4px',
          color: '#fff',
          padding: '.2rem .5rem',
          fontWeight: 'bold',
        }}
      >
        {children}
      </span>
    );
  }