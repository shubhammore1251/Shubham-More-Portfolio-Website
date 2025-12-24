import { Code2, Rocket, Users, Coffee, BugOff, Infinity } from "lucide-react";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

export function useFakeTyping(lines, baseSpeed = 120, pauseAfter = 2000) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let timer;

    // finished all lines → pause → restart
    if (lineIndex >= lines.length) {
      timer = setTimeout(() => {
        setLineIndex(0);
        setCharCount(0);
      }, pauseAfter);
      return () => clearTimeout(timer);
    }

    const currentLine = lines[lineIndex];

    // type current line in chunks
    if (charCount < currentLine.length) {
      const jitter = baseSpeed + Math.random() * 120;
      timer = setTimeout(() => {
        setCharCount((c) =>
          Math.min(c + Math.ceil(Math.random() * 3), currentLine.length)
        );
      }, jitter);
    } else {
      // move to next line
      timer = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharCount(0);
      }, 300 + Math.random() * 300);
    }

    return () => clearTimeout(timer);
  }, [charCount, lineIndex, lines, baseSpeed, pauseAfter]);

  return lines
    .slice(0, lineIndex)
    .concat(lines[lineIndex]?.slice(0, charCount) ?? []);
}

const rawLines = [
  'name: "Shubham More",',
  'role: "Software Developer",',
  'location: "Mumbai, India",',
  'passion: "Building scalable web and mobile applications",',
  "available: true,",
  'created_at: "2001-05-12T19:08:00.000+05:30"',
];

function getCupsOfCoffee() {
  const startDate = new Date("2024-01-01");
  const today = new Date();

  const diffMs = today - startDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays; // 1 cup per day
}

const calculateYearsOfExperience = () => {
  const startDate = new Date("2023-11-06"); // Replace with your actual start date
  const currentDate = new Date();

  const diffInMs = currentDate - startDate;
  const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years

  return parseFloat(diffInYears.toFixed(1)); // One decimal place
};

const stats = [
  {
    icon: Code2,
    value: (
      <CountUp
        end={calculateYearsOfExperience()}
        duration={2.5}
        decimals={1}
        decimal="."
        preserveValue={true}
      />
    ),
    label: "Years Experience",
  },
  {
    icon: Coffee,
    value: <CountUp end={getCupsOfCoffee()} duration={2.5} />,
    label: "Cups of Coffee",
  },
  { icon: BugOff, value: <Infinity />, label: "Debugging Hours" },
];

function renderCodeLine(line) {
  const match = line.match(/^(\w+):\s(.+?)(,?)$/);

  if (!match) {
    return <span className="text-muted-foreground">{line}</span>;
  }

  const [, key, rawValue, comma] = match;

  const isBoolean = rawValue === "true" || rawValue === "false";
  const isString = rawValue.startsWith('"');
  const isDate = rawValue.startsWith('"2001');

  let valueColor = "text-accent courier-prime-regular! text-base!"; // default string (red/pink)

  if (isBoolean) valueColor = "text-green-400 courier-prime-regular! text-base!";
  if (isDate) valueColor = "text-green-400 courier-prime-regular! text-base!";

  return (
    <>
      <span className="text-base! text-primary courier-prime-regular!">{key}</span>
      <span className="text-base! text-muted-foreground courier-prime-regular" >: </span>
      <span className={valueColor}>{rawValue}</span>
      <span className="text-base! text-muted-foreground courier-prime-regular!">{comma}</span>
    </>
  );
}

export const AboutSection = () => {
  const typed = useFakeTyping(rawLines);

  return (
    <section
      id="about"
      className="relative! py-24! md:py-32! flex justify-center"
    >
      {/* max-width wrapper */}
      <div className="w-full max-w-8xl px-6">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between space-y-8! lg:space-y-0!">
          {/* LEFT */}
          <div className="relative flex justify-center lg:justify-start w-full flex-1 px-13!">
            <div className="aspect-square max-w-xl w-full relative">
              {/* gradients */}
              <div
                className="absolute inset-0 rounded-2xl rotate-6"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.1))",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl -rotate-3"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.05))",
                }}
              />

              {/* card */}
              <div className="relative rounded-2xl bg-card border border-border overflow-hidden h-full">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
              linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)
            `,
                    backgroundSize: "2rem 2rem",
                  }}
                />

                <div className="p-10 h-full flex flex-col justify-center">
                  {/* opening line */}
                  <div className="font-mono text-base leading-6! text-muted-foreground mb-3 mx-6!">
                    <span className="text-primary courier-prime-regular!">
                      const
                    </span>{" "}
                    <span className="text-foreground courier-prime-regular!">
                      developer
                    </span>{" "}
                    = {"{"}
                  </div>

                  {/* object body */}
                  {/* <div className="font-mono! text-sm! leading-6! ml-10! space-y-1! ">
                    <p>
                      <span className="text-primary courier-prime-regular">
                        name
                      </span>
                      <span className="text-muted-foreground courier-prime-regular!">
                        :
                      </span>{" "}
                      <span className="text-accent courier-prime-regular">
                        "Shubham More"
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        ,
                      </span>
                    </p>

                    <p>
                      <span className="text-primary courier-prime-regular">
                        role
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        :
                      </span>{" "}
                      <span className="text-accent courier-prime-regular">
                        "Software Engineer"
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        ,
                      </span>
                    </p>

                    <p>
                      <span className="text-primary courier-prime-regular">
                        location
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        :
                      </span>{" "}
                      <span className="text-accent courier-prime-regular">
                        "Mumbai, India"
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        ,
                      </span>
                    </p>

                    <p>
                      <span className="text-primary courier-prime-regular">
                        passion
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        :
                      </span>{" "}
                      <span className="text-accent courier-prime-regular">
                        "Building scalable web and mobile applications"
                      </span>
                      <span className="text-muted-foreground">,</span>
                    </p>

                    <p>
                      <span className="text-primary courier-prime-regular">
                        available
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        :
                      </span>{" "}
                      <span className="text-green-400 courier-prime-regular">
                        true
                      </span>
                    </p>

                    <p>
                      <span className="text-primary courier-prime-regular">
                        created_at
                      </span>
                      <span className="text-muted-foreground courier-prime-regular">
                        :
                      </span>{" "}
                      <span className="text-green-400 courier-prime-regular">
                        "2001-05-12T19:08:00.000+05:30"
                      </span>
                    </p>
                  </div> */}
                  <div className="font-mono! text-sm! leading-6! ml-10! space-y-1! mt-3">
                    {typed.map((line, i) => {
                      const isLastTypedLine = i === typed.length - 1;

                      return (
                        <div key={i} className="flex! items-baseline!">
                          <div>{renderCodeLine(line)}</div>

                          {/* cursor only on the active line */}
                          {isLastTypedLine && (
                            <span className="cursor text-primary ml-1">|</span>
                          )}
                        </div>
                      );
                    })}

                    {/* after all lines are done, move cursor to new line */}
                    {/* {typed.length === rawLines.length && (
                      <div className="flex items-baseline">
                        <span className="cursor text-primary ml-1">|</span>
                      </div>
                    )} */}
                  </div>

                  {/* closing brace */}
                  <div className="font-mono text-sm! leading-6! text-muted-foreground mt-3 mx-6!">
                    {"}"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full flex-1 flex flex-col space-y-8! px-5!">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center! lg:text-left!">
              About Me
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              A passionate developer who loves building modern web and mobile
              apps, exploring new technologies and crafting smooth user
              experiences.
              <br />
              <br />I specialize in React, React Native, Next.js and Node. I
              enjoy solving complex problems and building things that look great
              and work even better.
            </p>

            {/* stats */}
            <div className="flex flex-wrap space-x-5! mt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-35 items-center justify-center flex flex-col text-center p-4! rounded-xl border border-border hover-lift space-y-1!"
                  style={{ backgroundColor: "hsl(var(--secondary) / 0.3)" }}
                >
                  <div>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  {React.createElement("div", {
                    className: "text-2xl font-bold text-accent",
                    children: stat.value,
                  })}
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
