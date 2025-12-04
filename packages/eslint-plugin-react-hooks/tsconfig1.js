{
  "extends": "../../tsconfig.base.json", // This is common in monorepos. Keep it.
  "compilerOptions": {
    // ... other compiler options
    
    // Add the path to your new local typings folder
    "typeRoots": [
      "./node_modules/@types",
      "./types" 
    ]
  },
  "include": [
    "./src/**/*",
    "./types/**/*" // <-- Ensure your custom definition file is included
  ],
  "exclude": [
    "./node_modules",
    "./dist"
  ]
}