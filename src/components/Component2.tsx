import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse } from '@mui/material';

interface SubDepartment {
  id: number;
  name: string;
}

interface Department {
  id: number;
  name: string;
  subDepartments: SubDepartment[];
}

// Hardcoded JSON data representing departments and sub-departments
const jsonData: Department[] = [
  {
    id: 1,
    name: 'Department A',
    subDepartments: [
      { id: 11, name: 'Sub Department A1' },
      { id: 12, name: 'Sub Department A2' },
    ],
  },
  {
    id: 2,
    name: 'Department B',
    subDepartments: [
      { id: 21, name: 'Sub Department B1' },
      { id: 22, name: 'Sub Department B2' },
    ],
  },
  {
    id: 3,
    name: 'Department C',
    subDepartments: [
      { id: 31, name: 'Sub Department C1' },
      { id: 32, name: 'Sub Department C2' },
    ],
  },
];

const Component2: React.FC = () => {
  const [openDepartmentId, setOpenDepartmentId] = useState<number | null>(null);

  const handleDepartmentClick = (departmentId: number) => {
    setOpenDepartmentId((prevId) => (prevId === departmentId ? null : departmentId));
  };

  return (
    <div>
      <h2>Second Page - Component 2</h2>
      <List>
        {jsonData.map((department) => (
          <div  key={department.id}>
            <ListItem button onClick={() => handleDepartmentClick(department.id)}>
              <ListItemText primary={department.name} />
            </ListItem>
            <Collapse in={openDepartmentId === department.id} timeout="auto" unmountOnExit>
              <List  disablePadding>
                {department.subDepartments.map((subDepartment) => (
                  <ListItem key={subDepartment.id}>
                    <ListItemText primary={subDepartment.name} secondary={`ID: ${subDepartment.id}`} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  );
};

export default Component2;
