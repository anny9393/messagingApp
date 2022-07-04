export const getUserName = ({profile}) => {
    const { userName, userSurname } = profile;
    return `${userName} ${userSurname}`
}

