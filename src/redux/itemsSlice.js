import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: { contacts: [], isLoading: false, error: null },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(({ id }) => id === payload);
        state.contacts.splice(index, 1);
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      ),
});

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { contacts: [], isLoading: false, error: null },
//   extraReducers: {
//     [fetchContacts.pending]: handlePending,
//     [fetchContacts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },
//     [fetchContacts.rejected]: handleRejected,

//     [addContact.pending]: handlePending,
//     [addContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts.push(payload);
//     },
//     [addContact.rejected]: handleRejected,

//     [deleteContact.pending]: handlePending,
//     [deleteContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.contacts.findIndex(({ id }) => id === payload);
//       state.contacts.splice(index, 1);
//     },
//     [deleteContact.rejected]: handleRejected,
//   },
// });

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { contacts: [], isLoading: false, error: null },
//   reducers: {
//     addContact(state, { payload }) {
//       state.contacts.push(payload);
//     },
//     deleteContact(state, { payload }) {
//       return state.contacts.filter(contact => contact.id !== payload.id);
//     },
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.contacts = action.payload;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   addContact,
//   deleteContact,
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } = itemsSlice.actions;

// export const itemsSlice = createSlice({
//   name: 'items',
//   initialState: { contacts: [], isLoading: false, error: null },
//   reducers: {
//     addContact(state, { payload }) {
//       state.contacts.push(payload);
//     },
//     deleteContact(state, { payload }) {
//       return state.contacts.filter(contact => contact.id !== payload.id);
//     },
//   },
// });

// export const { addContact, deleteContact } = itemsSlice.actions;
