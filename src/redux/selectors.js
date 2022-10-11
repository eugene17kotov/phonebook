import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items.contacts;

export const selectIsLoading = state => state.contacts.items.isLoading;

export const selectError = state => state.contacts.items.error;

export const selectFilterValue = state => state.contacts.filter;

export const selectFiltredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
