import base64
import json
import sys
import os

def main():
    output = {}
    i = 0

    # Convert each image to base64, first arg is script name
    for file_directory in sys.argv[1:]:
        with open(file_directory, "rb") as file:
            encoded_string = base64.b64encode(file.read()).decode("utf-8")
            output[file_directory] = encoded_string
            i += 1

    # Create and write to output file
    output_file = os.path.join(os.path.dirname(__file__), "output.json")
    with open(output_file, "w") as f:
        json.dump(output, f)

    print("Successfully converted {} images to base64! Saved to output.json".format(i))

if __name__ == "__main__":
    main()
