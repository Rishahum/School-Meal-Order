import { Box } from "@chakra-ui/react";

function CircularTextSVG() {
  return (
    <Box textAlign="center" mt={4}>
      <svg
        width="300" // Using valid JSX attributes
        height="300"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg" // Ensure correct namespace
      >
        {/* Define the circular path */}
        <defs>
          <path
            id="circlePath"
            d="M150,150 m-100,0 a100,100 0 1,1 200,0 a100,100 0 1,1 -200,0"
          />
        </defs>

        {/* Attach text to the circular path */}
        <text fill={"#e82c44"} fontSize="27" fontWeight="bold">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            .  THE LUNCH BAG .  Empowered, Educated Eating
          </textPath>
        </text>

        {/* Add subtext manually if needed */}
        <text x="150" y="180" textAnchor="middle" fontSize="12" fill="red">
          
        </text>
      </svg>
    </Box>
  );
}

export default CircularTextSVG;
