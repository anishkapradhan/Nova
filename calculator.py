def add(a: float, b: float) -> float:
    """Return the sum of a and b."""
    return a + b


def subtract(a: float, b: float) -> float:
    """Return the difference of a and b."""
    return a - b


def multiply(a: float, b: float) -> float:
    """Return the product of a and b."""
    return a * b


def divide(a: float, b: float) -> float:
    """Return the quotient of a and b.
    
    Raises:
        ValueError: If b is zero.
    """
    if b == 0:
        raise ValueError("Cannot divide by zero.")
    return a / b


def power(a: float, b: float) -> float:
    """Return a raised to the power of b."""
    return a ** b


def main():
    print("=" * 40)
    print("        Simple CLI Calculator")
    print("=" * 40)
    print("Available operations:")
    print("  1. Add (+)")
    print("  2. Subtract (-)")
    print("  3. Multiply (*)")
    print("  4. Divide (/)")
    print("  5. Power (^)")
    print("  q. Quit")
    print("-" * 40)

    operations = {
        "1": ("Add", add),
        "+": ("Add", add),
        "2": ("Subtract", subtract),
        "-": ("Subtract", subtract),
        "3": ("Multiply", multiply),
        "*": ("Multiply", multiply),
        "4": ("Divide", divide),
        "/": ("Divide", divide),
        "5": ("Power", power),
        "^": ("Power", power),
    }

    while True:
        choice = input("\nSelect operation (1-5 or +, -, *, /, ^, or 'q' to quit): ").strip()
        if choice.lower() in ("q", "quit", "exit"):
            print("Goodbye!")
            break

        if choice not in operations:
            print("Invalid selection. Please try again.")
            continue

        op_name, func = operations[choice]

        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
            result = func(num1, num2)
            # Format integer outputs without decimal if whole
            formatted_result = int(result) if result.is_integer() else result
            print(f"Result ({op_name}): {formatted_result}")
        except ValueError as err:
            print(f"Error: {err}")
        except Exception as e:
            print(f"An unexpected error occurred: {e}")


if __name__ == "__main__":
    main()
