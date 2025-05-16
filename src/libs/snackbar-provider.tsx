
"use client"
import { SnackbarProvider } from 'notistack'
import React from 'react'

const SnackBarProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
      <SnackbarProvider   autoHideDuration={4000} >
    {children}
    </SnackbarProvider>
  )
}

export default SnackBarProviderWrapper
