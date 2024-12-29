@echo off

if exist dist (
  rmdir /s /q dist
  echo "Deleted dist folder."
) else (
  echo "dist folder does not exist."
)