import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SQONView, TestBuild } from '../dist/main.mjs';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<h1>Test</h1>
		<TestBuild />
	</StrictMode>,
);
