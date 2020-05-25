import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/_variables.style';

interface ILabelAtrProps {
  htmlFor: string;
}

declare type SelectOptions = {
  id: number;
  name: string;
  value: string | number;
};

interface ISelectProps {
  name: string;
  placeholder?: string;
  label?: string;
  value: string | number;
  options: SelectOptions[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = (props: ISelectProps): React.ReactElement => {
  const { name, options, placeholder, label, value, handleChange, handleBlur } = props;
  return (
    <Select.Wrapper>
      {label && <Select.Label htmlFor={name}>{label}</Select.Label>}
      <Select.Select
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </Select.Select>
    </Select.Wrapper>
  );
};

Select.Wrapper = styled.div`
  padding-bottom: 1em;
  width: 100%;
`;

Select.Label = styled.label<ILabelAtrProps>`
  padding: 0.6em 0;
  display: block;
`;

Select.Select = styled.select`
  width: 100%;
  max-width: 100%;
  padding: 0.85em;
  border-radius: 3px;
  border: 1px solid transparent;
  background: ${colors.LIGHT_GRAY};
  appearance: none;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkzIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDI5MyAxNjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yODcgNS40MDI3N0MyODUuMzIxIDMuNjU2NTUgMjgzLjMgMi4yNzU2NCAyODEuMDYzIDEuMzQ2NDZDMjc4LjgyNiAwLjQxNzI4MSAyNzYuNDIyIC0wLjA0MDE2MzYgMjc0IDAuMDAyNzY0NDNIMTguNEMxMy40IDAuMDAyNzY0NDMgOS4xMDAwMSAxLjgwMjc3IDUuNTAwMDEgNS40MDI3N0MzLjc2MDQgNy4wNDk3IDIuMzc1MzIgOS4wMzQ0MyAxLjQyOTU5IDExLjIzNTRDMC40ODM4NjIgMTMuNDM2NCAtMC4wMDI1OTU0NCAxNS44MDcyIDEuMDQxNGUtMDUgMTguMjAyOEMxLjA0MTRlLTA1IDIzLjIwMjggMS44MDAwMSAyNy41MDI4IDUuNDAwMDEgMzEuMTAyOEwxMzMuNCAxNTkuMDAzQzEzNyAxNjIuNjAzIDE0MS4yIDE2NC40MDMgMTQ2LjIgMTY0LjQwM0MxNTEuMiAxNjQuNDAzIDE1NS40IDE2Mi42MDMgMTU5IDE1OS4wMDNMMjg3IDMxLjAwMjhDMjkwLjUgMjcuNTAyOCAyOTIuNCAyMy4yMDI4IDI5Mi40IDE4LjIwMjhDMjkyLjQgMTMuMjAyOCAyOTAuNSA5LjAwMjc3IDI4Ni45IDUuNDAyNzdIMjg3WiIgZmlsbD0iIzg4ODg4OCIvPgo8L3N2Zz4K');
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  ::-ms-expand {
    display: none;
  }

  ::placeholder {
    font-size: 0.85rem;
    color: ${colors.DARK_GRAY};
  }

  &:focus {
    background: ${colors.WHITE};
    outline: none;
  }
`;

export default Select;
