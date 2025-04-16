import React, { useState } from 'react';
import jsonData from '../../data.json';

export default function Data() {
const [data] = useState(jsonData);

return (
<div>
<h1>Liste des utilisateurs</h1>
<ul>
{data.map((item, index) => (
<li key={index}>{item.title}</li>
))}
</ul>
</div>
);
}