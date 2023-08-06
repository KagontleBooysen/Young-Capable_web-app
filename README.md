# Yound&Capable 
![youngcapable-low-resolution-logo-black-on-white-background-removebg-preview (1)](https://github.com/KagontleBooysen/Young-Capable_web-app/assets/106469425/417ce9f9-ebbe-4bd1-afe6-38bb6f41d0ae)



Young&Capable is an online platform empowering the youth of Alexandra, South Africa, through I.T. education and training. Focusing on programming, web development, and database management, it equips students with essential skills for success in the technology industry. The platform also offers mentorship connections and informative events to support their growth in the I.T. field further.


## Demo

Check out the site: [Young&Capable](https://youngandcapable.netlify.app)

## Screenshots

![Screenshot 2023-05-05 163803](https://github.com/KagontleBooysen/Young-Capable_web-app/assets/106469425/c7ec6a9c-4759-45a0-968f-d52951d60b01)



## Connect with us

As a community, we always encourage people to share their thoughts and ideas. Do you want to talk about this project or intersted contributing feel to do so.

[![FIGMA - View](https://img.shields.io/badge/Figma-View-2ea44f?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/proto/jwqIT3fE5PPi8UkibeKuZf/final-ALU-opportunity-board?node-id=6-820&starting-point-node-id=40%3A936-board)

## Tech stack

![React](https://img.shields.io/badge/React-305FCB?style=for-the-badge&logo=next.js&logoColor=white)
![tailwind css](https://img.shields.io/badge/tailwind_css-305FCB?style=for-the-badge&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-305FCB?style=for-the-badge&logo=mongodb&logoColor=white)
![SQLalchemy](https://img.shields.io/badge/SQLalchemy-305FCB?style=for-the-badge&logo=prisma&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-305FCB?style=for-the-badge&logo=figma&logoColor=white)

1. Frontend - **React**
2. CSS Framework - **Tailwind CSS**
3. Backend - **Flask APIs + Auth0 + PostgreSQL + SQlachemy ORM**
4. Design & Prototype - Figma

## Installation steps

1. Fork the project

2. Clone the project by running
   ```sh
   git clone https://github.com/<your-github-username>/opportunity-board.git
   ```
3. Go into the project directory
   ```sh
   cd opportunity-board
   ```
4. Create an `.env` file from the `.env.template` file (copy everything in the `.env.template` file and put it in the `.env` file with appropriate values).

   - `POSTGRES_URI` is the `connection string` which you'll get from mongodb [for reference](https://www.mongodb.com/docs/manual/reference/connection-string/).
   - `GOOGLEAUTH_SECRET` Just pass any `random string` or you can quickly create a good value on the command line via this `openssl command`.

   ```sh
   openssl rand -base64 32
   ```

5. Run docker container
   ```sh
   docker compose up
   ```
6. Go to
   ```sh
   http://localhost:5173/
   ```
7. Backend running at
   ```sh
   http://localhost:3000/
   ```

## Contributing Guidelines

Any contributions you make are truly appreciated, go to our [CONTRIBUTING.md](https://github.com/ALU-Opportunity-Board/opportunity-board/blob/develop/CONTRIBUTING.md) file for more information.

## Code of Conduct

View [CODE_OF_CONDUCT.md](https://github.com/ALU-Opportunity-Board/opportunity-board/blob/develop/CODE_OF_CONDUCT.md)

## License

opportunity-board is licensed under the MIT License - see the [LICENSE](https://github.com/ALU-Opportunity-Board/opportunity-board/blob/main/LICENSE) file for details.

## Thanks to all Contributors

<a href="https://github.com/ALU-Opportunity-Board
/opportunity-board/graphs/contributors">
<img src="https://contrib.rocks/image?repo=ALU-Opprtunity-Board/opportunity-board" />
</a>
