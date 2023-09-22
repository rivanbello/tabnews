function status(request, response) {
  return response.status(200).json("Hello World");
}

export default status;
