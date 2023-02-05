const customStyles = {
  option: (defaultStyles) => ({
    ...defaultStyles,
    color: "#4334C8",
    backgroundColor: "FFFF",
    margin:"10px 0",

    "&:hover": {
      backgroundColor: "#f0ecfc",
      borderRadius:"10px"
    }
  }),

  singleValue: (defaultStyles) => ({
    ...defaultStyles,
    color: "#4334C8",
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: "#EFEFEF",
    padding: "5px",
    border: "2px solid #4334C8",
    borderRadius: "10px",
    boxShadow: "none",
    color: "#4334C8",

    "&:hover": {
      backgroundColor: "#FFFF"
    }
  }),

  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles, 
    display: "none",
  }),

  dropdownIndicator: (defaultStyles) => ({
    ...defaultStyles, 
    color: "#4334C8",

  }),

  menu: (defaultStyles) => ({
    ...defaultStyles,
    borderRadius: "8px",
    marginTop: "20px",
    padding: "5px",
    borderRadius:"8px",
    border: "2px solid #4334C8",
  }),

  menuList: (defaultStyles) => ({
    ...defaultStyles, 
    backgroundColor: "#FFF",
    maxHeight: "20vh",

    "::-webkit-scrollbar": {
      width: "4px",
      borderRadius:"20px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f0ecfc",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#B3a5de",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "#4334C8",
    }
  }),

  placeholder: (defaultStyles) => ({
    ...defaultStyles, 
    color: "#4334C8",

  }),

  multiValueLabel: (defaultStyles) => ({
    ...defaultStyles, 
    color: "#4334C8",
  }),
};

export default customStyles ;
