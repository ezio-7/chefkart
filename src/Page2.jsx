import { useState } from 'react'
import Intro from './Intro';
import Ingredients from './Ingredients';

export default function Page2() {
    return (
      <div className = "Page2">
        <Intro />
        <Ingredients />
      </div>
    );
}