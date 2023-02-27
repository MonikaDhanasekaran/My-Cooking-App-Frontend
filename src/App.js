import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginComponent from './Components/AuthComponents/LoginComponent';
import RegisterComponent from './Components/AuthComponents/RegisterComponent';
import ForgotPasswordComponent from './Components/AuthComponents/ForgotPasswordComponent';
import HomeComponent from './Components/HomeComponents/HomeComponent';
import IndianRecipeComponent from './Components/HomeComponents/IndianRecipeComponent';
import ChineseRecipeComponent from './Components/HomeComponents/ChineseRecipeComponent';
import AsianRecipeComponent from './Components/HomeComponents/AsianRecipeComponent';
import JapaneseRecipeComponent from './Components/HomeComponents/JapaneseRecipeComponent';
import ItalianRecipeComponent from './Components/HomeComponents/ItalianRecipeComponent';
import SnackRecipeComponent from "./Components/HomeComponents/SnackRecipeComponent";
import ContinentalRecipeComponent from "./Components/HomeComponents/ContinentalRecipeComponent";
import DessertRecipeComponent from "./Components/HomeComponents/DessertRecipeComponent";
import StarterRecipeComponent from "./Components/HomeComponents/StarterRecipeComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LoginComponent /> } />
          <Route path="/signup" element={ <RegisterComponent /> } />
          <Route path="/forgotpassword" element={ <ForgotPasswordComponent /> } /> 
          <Route path="/home" element={ <HomeComponent /> } />
          <Route path="/cook/indianRecipe" element={ <IndianRecipeComponent /> } />
          <Route path="/cook/chineseRecipe" element={ <ChineseRecipeComponent /> } />
          <Route path="/cook/asianRecipe" element={ <AsianRecipeComponent /> } />
          <Route path="/cook/japaneseRecipe" element={ <JapaneseRecipeComponent /> } />
          <Route path="/cook/italianRecipe" element={ <ItalianRecipeComponent /> } />
          <Route path="/cook/snackRecipe" element={ <SnackRecipeComponent /> } />
          <Route path="/cook/continentalRecipe" element={ <ContinentalRecipeComponent /> } />
          <Route path="/cook/dessertRecipe" element={ <DessertRecipeComponent /> } />
          <Route path="/cook/starterRecipe" element={ <StarterRecipeComponent /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;