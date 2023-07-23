import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText, Checkbox } from '@mui/material';

interface Department {
  id: number;
  name: string;
  subDepartments: string[];
}

const initialDepartmentData: Department[] = [
  {
    id: 1,
    name: 'Department A',
    subDepartments: ['Sub Department A1', 'Sub Department A2', 'Sub Department A3'],
  },
  {
    id: 2,
    name: 'Department B',
    subDepartments: ['Sub Department B1', 'Sub Department B2'],
  },
  {
    id: 3,
    name: 'Department C',
    subDepartments: ['Sub Department C1', 'Sub Department C2', 'Sub Department C3'],
  },
];

interface CheckedStatus {
  [key: number]: boolean;
}

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [checkedStatus, setCheckedStatus] = useState<CheckedStatus>({});

  const handleExpand = (id: number) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleCheckboxChange = (id: number, subDepartments: string[]) => {
    setCheckedStatus((prev) => {
      const newState = { ...prev };
      newState[id] = !newState[id];

      // If department is selected, select all its sub-departments
      if (newState[id]) {
        subDepartments.forEach((subDept) => {
          newState[subDept] = true;
        });
      } else {
        // If department is deselected, deselect all its sub-departments
        subDepartments.forEach((subDept) => {
          newState[subDept] = false;
        });
      }

      return newState;
    });
  };

  return (
    <div>
      <h2>Second Page - Component 2</h2>
      <List>
        {initialDepartmentData.map((department) => (
          <div key={department.id}>
            <ListItem button onClick={() => handleExpand(department.id)}>
              <ListItemText primary={department.name} />
            </ListItem>
            <Collapse in={expanded === department.id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.subDepartments.map((subDepartment) => (
                  <ListItem key={subDepartment} button>
                    <Checkbox
                      checked={checkedStatus[subDepartment] || false}
                      onChange={() => handleCheckboxChange(department.id, department.subDepartments)}
                    />
                    <ListItemText primary={subDepartment} />
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

export default DepartmentList;
