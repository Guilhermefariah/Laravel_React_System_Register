import React from 'react'

export const AlertMessage = ({ message }) => {

    const isSuccess = message.success ? true : false
    const isError = message.error ? true : false

    if (!isSuccess && !isError) return null

    const alertStyles = isSuccess
        ? {
            bg: 'bg-green-500 dark:bg-green-800',
            text: 'text-green-800 dark:text-green-500',
            content: message.success,
        } : {
            bg: 'bg-red-500 dark:bg-red-800',
            text: 'text-red-800 dark:text-red-500',
            content: message.error,
        }

    return (
        <div className={`p-3 m-3 text-sm rounded-lg ${alertStyles.text} ${alertStyles.bg}`}>
            {alertStyles.content}
        </div>
    )
}