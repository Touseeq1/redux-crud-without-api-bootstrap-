const initialData = [{
  id: 0,
  name: "Tuseeq",
  number: 990909009,
  email: "Touseq@gmail.com",
},
{
  id: 1,
  name: "Haider",
  number: 123456709,
  email: "Haider@gmial.com",
},
{
  id: 2,
  name: "Zeshan",
  number: 123456709,
  email: "Zeshan@gmial.com",
},]
const Reduce = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload]
      // console.log(state)
      return state;
    case "UPDATE_CONTACT":
      const updatestate = state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
      state = updatestate;
      return state
    case "DELETE_CONTACT":
      const filter_contact = state.filter((contact) => contact.id !== action.payload && contact)
      state = filter_contact;
      return state
    default: return state}
}
export default Reduce