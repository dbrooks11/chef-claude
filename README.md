# Chef Claude

An AI-powered recipe generator that creates custom recipes based on ingredients provided by the user. This project utilizes Anthropic's Claude AI API and demonstrates practical implementation of React hooks including useRef, useState, and useEffect.

## Description

Chef Claude allows users to input available ingredients and generates tailored recipes using Claude AI. The application showcases advanced React concepts including managing form inputs with useRef, handling component state with useState, and managing side effects with useEffect for API integration.

## Features

- Dynamic ingredient input with real-time list updates
- AI-powered recipe generation using Claude API
- Responsive user interface
- Ingredient management system
- Custom recipe suggestions based on available ingredients

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Anthropic Claude AI API

## Installation

1. Clone the repository
```
git clone https://github.com/yourusername/chef-claude.git
```

2. Navigate to the project directory
```
cd chef-claude
```

3. Install dependencies
```
npm install
```

4. Create a `.env` file in the root directory and add your Claude API key
```
VITE_CHEF_CLAUDE_API_KEY=your_api_key_here
```

5. Start the development server
```
npm start
```

6. Open your browser and visit `http://localhost:3000`

## Usage

1. Enter an ingredient in the input field
2. Add the ingredient to your list
3. Repeat for all available ingredients
4. Click the generate recipe button
5. Chef Claude will create a custom recipe using your ingredients

## Learning Objectives

This project was built to practice and understand:

- Using useRef for managing DOM references and form inputs
- Managing complex state with useState
- Implementing useEffect for API calls and side effects
- Working with external AI APIs
- Handling asynchronous operations in React
- Building dynamic user interfaces with React hooks

## API Reference

This project uses the Anthropic Claude API. You will need to obtain an API key from Anthropic to run this application.

Visit https://www.anthropic.com to learn more about the Claude API.
