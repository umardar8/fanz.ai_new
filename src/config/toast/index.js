const ShowMessage = (toast, title, status, duration = 3000, isClosable = true) => {
    toast({
        title: title,
        status: status,
        duration: duration,
        isClosable: isClosable,
    });
};

export default ShowMessage;

