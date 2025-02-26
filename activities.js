const activities = [
    // Quick Activities
    {
        title: "One-Minute Paper",
        icon: "✍️⏱️",
        tags: ["individual", "remember", "reflect"],
          durationCategory: "Quick Activities (5-15 minutes)",
          duration: "1-5 minutes",
          format: "Individual reflection",
          shortDescription: "Students quickly reflect on their learning by responding to a simple question.",
          description: "Students quickly reflect on their learning by responding to a simple question posed by the facilitator.",
          whyUseIt: "Checks students' learning, consolidates what students have learned, encourages immediate reflections.",
          materialsNeeded: [
            "Paper and pens/pencils (or digital device)",
            "Timer"
          ],
          steps: [
            "Pose a reflective question about the day's content (e.g., \"What was the most important thing you learned today?\").",
            "Give students one minute to write their response.",
            "Collect responses (physically or digitally).",
            "Review responses to gauge understanding and plan future lessons."
          ],
          variations: [
            "Digital version: Use a shared document or learning management system for submissions.",
            "Two-minute paper: Extend time for more detailed responses.",
            "Video reflection: Use after watching a short video to test both verbal and visual memory."
          ],
          tips: "Vary questions to focus on different aspects of learning (content comprehension, application, learning process). Walk around to quickly read some responses to gauge student understanding. Occasionally share anonymous insights at the start of the next class. Pair with a video to engage students visually and auditorily.",
          assessment: "Use responses to identify common misunderstandings and adjust teaching accordingly."
        },
        {
          title: "Think-Pair-Share",
          icon: "🧠👥",
          tags: ["pair", "understand", "analyze"],
          durationCategory: "Quick Activities (5-15 minutes)",
          duration: "5-15 minutes",
          format: "Individual reflection, pair discussion, whole class sharing",
          shortDescription: "Students think individually, then discuss with a partner, and share with the class.",
          description: "Students think about a question individually, discuss their thoughts with a partner, then share insights with the whole class.",
          whyUseIt: "Engages every student in discussion, invites dialogues, encourages shy students to express ideas, promotes peer learning.",
          materialsNeeded: [
            "Discussion question",
            "Timer"
          ],
          steps: [
            "Pose a thought-provoking question related to the topic.",
            "Give students 1-2 minutes to think individually.",
            "Have students pair up and share their thoughts for 2-3 minutes.",
            "Call on pairs to share key points with the whole class."
          ],
          variations: [
            "Think-Write-Pair-Share: Add a written component before pairing.",
            "Digital version: Use breakout rooms and shared documents for online classes.",
            "Debate format: Assign opposing views to each pair for discussion."
          ],
          tips: "Be creative in the use of this activity to serve different purposes (e.g., debate, comparison of answers). Walk around to join conversations to understand what students know about a topic. Prepare a clear, open-ended question that aligns with your lesson objectives. Build on their discussions to introduce new concepts."
        },
        {
          title: "Word Cloud",
          icon: "☁️",
          tags: ["group", "remember", "create"],
          durationCategory: "Quick Activities (5-15 minutes)",
          duration: "5-10 minutes",
          format: "Whole class participation",
          shortDescription: "Students contribute words to create a visual representation of collective thoughts on a topic.",
          description: "Students contribute words or short phrases related to a topic, creating a visual representation of the class's collective thoughts.",
          whyUseIt: "Encourages free flow of ideas, activates prior knowledge, visualizes relationships between concepts.",
          materialsNeeded: [
            "Digital device for each student",
            "Word cloud generator (e.g., Mentimeter, Poll Everywhere)"
          ],
          steps: [
            "Present a question or topic to the class.",
            "Students submit words or short phrases via their devices.",
            "Display the generated word cloud to the class.",
            "Discuss the prominent words and patterns that emerge."
          ],
          variations: [
            "Pre/Post Lesson: Create clouds before and after a lesson to show learning progression.",
            "Comparison Clouds: Generate separate clouds for different concepts and compare."
          ],
          tips: "Use a QR code for easy access to the word cloud platform. Encourage keywords rather than sentences for better visualization. Remind students to type keywords instead of long sentences. Use the resulting word cloud to guide further discussion or introduce new topics. Prepare students for the technology use to save time.",
          assessment: "Analyze the word cloud to gauge student understanding and focus areas for further discussion."
        },
        {
          title: "Muddiest Point",
          icon: "🌫️",
          tags: ["individual", "understand", "evaluate"],
          durationCategory: "Quick Activities (5-15 minutes)",
          duration: "5-10 minutes",
          format: "Individual reflection",
          shortDescription: "Students identify and share the most confusing aspect of the lesson.",
          description: "Students identify and articulate the most confusing or unclear point from the lesson.",
          whyUseIt: "Identifies students' confusions, caters to the learning needs of quiet students, addresses common challenges.",
          materialsNeeded: [
            "Paper and pens/pencils (or digital device)",
            "Timer"
          ],
          steps: [
            "At the end of a lesson, ask students to write down their \"muddiest point\".",
            "Collect responses (physically or digitally).",
            "Review responses to identify common areas of confusion.",
            "Address the most common issues in the next class."
          ],
          tips: "Explain to students how and when the muddiest points will be addressed. Use an online platform for easy collection and analysis of responses. Consider addressing some points immediately if time allows."
        },
        {
          title: "Exit Ticket",
          icon: "🎫",
          tags: ["individual", "remember", "reflect"],
          durationCategory: "Quick Activities (5-15 minutes)",
          duration: "5-10 minutes",
          format: "Individual reflection",
          shortDescription: "Students answer quick questions before leaving to summarize learning or identify areas needing clarification.",
          description: "Students answer a few quick questions before leaving class to summarize their learning or identify areas needing clarification.",
          materialsNeeded: [
            "Prepared questions",
            "Paper or digital platform for responses"
          ],
          steps: [
            "Prepare 2-3 questions about the day's main concepts",
            "Distribute exit tickets (physical or digital) in the last few minutes of class",
            "Students complete the questions",
            "Collect responses as students leave",
            "Review responses to inform the next lesson"
          ],
          tips: [
            "Use digital tools for easy collection and analysis",
            "Vary question types (multiple choice, short answer, etc.)",
            "Address common issues or misconceptions in the next class"
          ]
        },
        {
          title: "Fill-in-the-Box Worksheet",
          icon: "📝",
          tags: ["individual", "understand", "apply"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "15-20 minutes",
          format: "Individual or small group activity",
          shortDescription: "Students complete a structured worksheet to practice applying specific concepts or methods.",
          description: "Students complete a structured worksheet to practice applying specific concepts or methods, such as writing learning objectives using the ABCD method.",
          whyUseIt: "Provides structured practice, reinforces key concepts, allows for immediate application of learning.",
          materialsNeeded: [
            "Prepared worksheets (physical or digital)",
            "Reference materials (e.g., ABCD method infographic)"
          ],
          steps: [
            "Distribute worksheets and explain the task.",
            "Students work individually or in small groups to complete the boxes.",
            "Circulate to provide guidance and answer questions.",
            "Review and discuss completed worksheets as a class."
          ],
          variations: [
            "Digital version: Use Google Sheets for real-time collaboration and instant feedback.",
            "Peer review: Have groups exchange and critique each other's work."
          ],
          tips: "Project instructions using the \"Freeze\" function on the lecture control panel. Allow time for group discussion if working collaboratively. Use a visualizer to share and discuss student work during debrief.",
          assessment: "Review completed worksheets for understanding and application of concepts."
        },
        {
          title: "Pass the Envelope",
          icon: "📨",
          tags: ["group", "remember", "apply"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "10-15 minutes",
          format: "Small group or whole class activity",
          shortDescription: "Students draw and answer questions from envelopes, passing them around the class.",
          description: "Students draw cards from an envelope, answer questions, and pass the envelope to the next person or group.",
          whyUseIt: "Allows students to collaborate, checks students' understanding, invites dialogues among students.",
          materialsNeeded: [
            "Envelopes with question cards",
            "Timer"
          ],
          steps: [
            "Prepare envelopes with cards containing questions or prompts.",
            "Students draw a card from the envelope.",
            "Allow one minute for preparation and one minute for presenting the answer.",
            "Pass the envelope to another student or group.",
            "Continue until all cards are answered or time is up."
          ],
          tips: "Design a mix of easy and challenging questions. Include some 'rule' cards that allow students to pass or answer additional questions to increase excitement. Allow students to prepare answers in pairs or groups to make the activity less intimidating."
        },
        {
          title: "Mind Mapping Poster",
          icon: "🗺️",
          tags: ["group", "understand", "analyze", "create"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "20-30 minutes",
          format: "Small group activity",
          shortDescription: "Students create visual representations of relationships between concepts on a poster.",
          description: "Students create visual representations of relationships between concepts on a large poster or digital platform.",
          whyUseIt: "Encourages free flow of ideas, activates and checks prior knowledge, visualizes relationships between concepts.",
          materialsNeeded: [
            "Large sheets of paper or digital canvas",
            "Markers, sticky notes",
            "Key concepts/ideas list"
          ],
          steps: [
            "Divide students into small groups.",
            "Provide each group with materials and key concepts.",
            "Groups draw connections between concepts and add their own ideas.",
            "Students write questions about concepts on sticky notes.",
            "Groups present their mind maps to the class."
          ],
          tips: "Include a variety of information like formulas, problems, or causes for mapping. Encourage students to see each other's work for cross-pollination of ideas. Use digital tools for collaborative mind mapping in online settings."
        },
        {
          title: "Four Corners",
          icon: "🧭",
          tags: ["group", "analyze", "evaluate"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "10-15 minutes",
          format: "Whole class movement and discussion",
          shortDescription: "Students move to corners representing different opinions on a topic and discuss their choices.",
          description: "Students choose one of four corners of the room, each representing a different response to a statement or question.",
          whyUseIt: "Encourages decision-making, promotes dialogue and discussions, involves everyone in learning.",
          materialsNeeded: [
            "Prepared statements or questions",
            "Labels for each corner"
          ],
          steps: [
            "Prepare a controversial statement or question with four possible responses.",
            "Assign each corner of the room to a different response.",
            "Students move to the corner that best represents their opinion.",
            "Students discuss their choice with others in their corner.",
            "Representatives from each corner share their group's reasoning with the class."
          ],
          tips: "Allow students to change corners if they change their mind during discussions. Use this activity to gauge opinions before a more in-depth debate or discussion. For online classes, use breakout rooms or polling features to replicate the activity."
        },
        {
          title: "Jigsaw Discussion",
          icon: "🧩",
          tags: ["group", "understand", "analyze", "create"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "20-30 minutes",
          format: "Small group discussion, expert groups, teaching groups",
          shortDescription: "Students become experts on a topic, then teach that material to others in mixed groups.",
          description: "Students become \"experts\" on a portion of material, then teach that material to others.",
          materialsNeeded: [
            "Prepared materials divided into sections",
            "Discussion guidelines for each section",
            "Timer"
          ],
          steps: [
            "Divide class into small \"expert\" groups and assign each group a portion of the material.",
            "Groups study and discuss their assigned material.",
            "Regroup students so that each new group has one member from each expert group.",
            "Students teach their expert material to their new group members.",
            "Conclude with a whole-class discussion or assessment to ensure comprehensive understanding."
          ],
          variations: [
            "Online version: Use breakout rooms for expert and teaching groups.",
            "Add a written component where groups create summaries of their expert topics."
          ],
          tips: "Ensure each section of material is equally challenging and important. Provide clear guidelines or questions for expert groups to focus their discussions."
        },
        {
          title: "Carousel Brainstorming",
          icon: "🎠",
          tags: ["group", "analyze", "create"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "20-30 minutes",
          format: "Small group rotation",
          shortDescription: "Groups rotate between stations, building on ideas for different aspects of a topic.",
          description: "Students rotate between stations to brainstorm ideas on different aspects of a topic, building on each other's contributions.",
          steps: [
            "Set up stations around the room, each with a different question or prompt",
            "Divide class into groups, assigning each to a starting station",
            "Groups spend 3-5 minutes at each station, adding ideas",
            "Rotate groups until all have visited each station",
            "Groups review final results at their last station",
            "Debrief and discuss key insights as a class"
          ],
          tips: [
            "Use different colored markers for each group to track contributions",
            "Encourage building on previous ideas, not just adding new ones",
            "For online classes, use collaborative digital whiteboards"
          ]
        },
        {
          title: "Interactive Quiz Creation",
          icon: "📱❓",
          tags: ["pair", "understand", "apply", "create"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "20-30 minutes",
          format: "Individual or pair activity",
          shortDescription: "GTAs create interactive quizzes using online tools to engage students and assess understanding.",
          description: "GTAs create interactive quizzes using free online tools to engage students and assess understanding.",
          steps: [
            "Introduce a free quiz-making tool (e.g., Kahoot, Quizizz)",
            "Demonstrate how to create a simple quiz (5 minutes)",
            "GTAs create a 5-question quiz on a topic from their field (15 minutes)",
            "Pairs exchange and take each other's quizzes (5 minutes)",
            "Discuss how to effectively use quizzes in tutorials (5 minutes)"
          ],
          tips: [
            "Focus on creating questions that promote critical thinking, not just recall",
            "Discuss how to use quiz results to adjust teaching strategies",
            "Consider accessibility when choosing quiz formats"
          ]
        },
        {
            title: "Collaborative Note-Taking",
            icon: "📝👥",
            tags: ["group", "understand", "analyze"],
            durationCategory: "Medium Activities (15-30 minutes)",
            duration: "15-20 minutes",
            format: "Small group activity",
            shortDescription: "GTAs practice facilitating collaborative note-taking using shared online documents.",
            description: "GTAs practice facilitating collaborative note-taking using shared online documents.",
            steps: [
              "Introduce a collaborative document tool (e.g., Google Docs, Microsoft OneNote)",
              "Divide into small groups and share a document link",
              "Present a short lecture snippet or reading (5 minutes)",
              "Groups collaboratively take notes, assigning roles (e.g., main ideas, examples, questions) (10 minutes)",
              "Discuss strategies for implementing this in tutorials (5 minutes)"
            ],
            tips: [
              "Emphasize the importance of clear note organization",
              "Discuss how to manage student participation in collaborative documents",
              "Address potential issues like unequal participation or distractions"
            ]
          },
          {
            title: "Real-world Application Poster",
            icon: "🖼️",
            tags: ["group", "apply", "analyze", "create"],
            durationCategory: "Extended Activities (30+ minutes)",
            duration: "15-30 minutes (or longer if research is required)",
            format: "Small group activity",
            shortDescription: "Students create posters demonstrating real-world applications of course concepts.",
            description: "Students work in pairs or groups to come up with ways of applying what they have learned in the real world, then present their ideas.",
            whyUseIt: "Makes learning more meaningful to the learner, encourages active application of theory and skills.",
            materialsNeeded: [
              "Topic cards or concepts",
              "Poster materials or digital presentation tools",
              "Research materials or internet access"
            ],
            steps: [
              "Divide students into pairs or small groups.",
              "Provide topic cards or concepts for real-world application.",
              "Allow time for brainstorming and research.",
              "Groups create a poster or digital presentation of their ideas.",
              "Groups present their findings to the class or in a gallery walk format."
            ],
            tips: "Provide guidance to individual groups to help them explore more. Encourage students to link the new concept to what they have learned previously. Consider providing whiteboard/flip chart paper for students to visualize their ideas. For a paperless option, use digital tools for collaborative brainstorming and presentation."
          },
          {
            title: "SWOT Analysis",
            icon: "📊",
            tags: ["group", "analyze", "evaluate"],
            durationCategory: "Extended Activities (30+ minutes)",
            duration: "30-45 minutes",
            format: "Small group activity",
            shortDescription: "Students analyze Strengths, Weaknesses, Opportunities, and Threats related to a teaching scenario.",
            description: "Students work together to identify Strengths, Weaknesses, Opportunities, and Threats related to a teaching scenario or course design.",
            whyUseIt: "Encourages understanding of strengths and weaknesses, develops mutual understanding, promotes group collaborations.",
            materialsNeeded: [
              "SWOT template",
              "Teaching scenario handouts",
              "Markers, sticky notes"
            ],
            steps: [
              "Divide students into small groups.",
              "Provide each group with a SWOT template and a teaching scenario.",
              "Groups brainstorm and fill in each quadrant of the SWOT analysis.",
              "Groups discuss ways to leverage strengths and opportunities, and mitigate weaknesses and threats.",
              "Each group presents their analysis to the class."
            ],
            tips: "Encourage students to focus on weaknesses within their control. Provide sticky notes and markers of different colors for visual organization. Use this activity to prepare for lesson planning or micro-teaching sessions."
          },
          {
            title: "Problem-Based Learning Project",
            icon: "🔍🛠️",
            tags: ["group", "analyze", "evaluate", "create"],
            durationCategory: "Extended Activities (30+ minutes)",
            duration: "45-60 minutes",
            format: "Small group project",
            shortDescription: "Students work in teams to solve a complex, real-world problem related to course material.",
            description: "Students work in teams to solve a complex, real-world problem related to the course material.",
            materialsNeeded: [
              "Problem scenario handouts",
              "Research materials or internet access",
              "Presentation materials (optional)"
            ],
            steps: [
              "Present the problem scenario to the class.",
              "Divide students into small groups.",
              "Groups analyze the problem and identify learning needs.",
              "Students research and gather information.",
              "Groups collaborate to develop a solution.",
              "Teams present their solutions to the class.",
              "Class discusses and evaluates the proposed solutions."
            ],
            variations: [
              "Extended version: Spread the activity over multiple class sessions for in-depth research and development.",
              "Add a peer review component where groups evaluate each other's solutions."
            ],
            tips: "Choose a problem that is relevant, engaging, and appropriately challenging. Provide clear evaluation criteria for the final solutions."
          },
          {
            title: "Gallery Walk",
            icon: "🖼️👣",
            tags: ["group", "analyze", "evaluate"],
            durationCategory: "Extended Activities (30+ minutes)",
            duration: "45-60 minutes",
            format: "Small group creation and whole class review",
            shortDescription: "Students create and present visual work, then review and provide feedback on others' presentations.",
            description: "Students create visual representations of their work, then review and provide feedback on others' work in a gallery-style format.",
            steps: [
              "Assign topics or projects to small groups",
              "Groups create visual presentations (posters, digital slides, etc.)",
              "Set up presentations around the room",
              "Students walk around, viewing other groups' work",
              "Provide structured feedback using post-it notes or digital tools",
              "Groups review feedback received and discuss improvements",
              "Class discussion on key learnings and insights"
            ],
            tips: [
              "Provide clear criteria for both creation and feedback",
              "Use a digital platform for online classes",
              "Incorporate a reflection component on the feedback received"
            ]
          },
          {
            title: "Pair Programming Exercise",
            icon: "💻👥",
            tags: ["pair", "understand", "apply", "create"],
            durationCategory: "Student-Created Activities",
            author: "Spring24-T01-MT01",
            duration: "15 minutes",
            format: "Pairs",
            shortDescription: "Students work in pairs to implement Python functions, practicing collaborative coding.",
            description: "Students practice defining and using functions in Python while promoting collaborative problem-solving.",
            materialsNeeded: [
              "Online Python IDE",
              "Presentation slides",
              "Function requirements handout"
            ],
            steps: [
              "Briefly introduce the concept of pair programming (2 minutes)",
              "Assign roles: Driver (writes code) and Navigator (reviews and directs)",
              "Present the function requirements: calculate area of rectangle, circle, and triangle (2 minutes)",
              "Pairs work together to implement the functions (8 minutes)",
              "Test the functions with provided test cases (2 minutes)",
              "Discuss challenges and benefits of pair programming (1 minute)"
            ],
            variations: [
              "Expand to include more complex geometric shapes or 3D objects",
              "Use different programming languages based on course focus",
              "Incorporate error handling and input validation for advanced classes"
            ]
          },
          {
            title: "Paraphrasing Practice",
            icon: "📝🔄",
            tags: ["individual", "understand", "apply"],
            durationCategory: "Student-Created Activities",
            author: "Spring24-T02-MT09",
            duration: "25 minutes",
            format: "Individual, then pairs for peer review",
            shortDescription: "Students practice paraphrasing academic texts to improve writing skills and avoid plagiarism.",
            description: "Students develop skills in paraphrasing academic texts and understand its importance in avoiding plagiarism.",
            materialsNeeded: [
              "Presentation slides",
              "Paraphrasing examples",
              "Worksheet with academic sentences/paragraphs"
            ],
            steps: [
              "Explain paraphrasing and its importance in academic writing (3 minutes)",
              "Present examples of successful and unsuccessful paraphrasing (5 minutes)",
              "Introduce and explain the 5-step paraphrasing method (2 minutes)",
              "Individual practice: Students paraphrase given sentences using the method (8 minutes)",
              "Pair up for peer review and feedback (5 minutes)",
              "Class discussion on challenges and strategies (2 minutes)"
            ],
            variations: [
              "Use discipline-specific texts for more targeted practice",
              "Incorporate online paraphrasing tools for comparison and discussion",
              "Extend to full paragraph paraphrasing for advanced students"
            ]
          },
          {
            title: "Creating User Personas",
            icon: "🧑‍🤝‍🧑🎨",
            tags: ["group", "analyze", "create"],
            durationCategory: "Student-Created Activities",
            author: "Spring24-T02-MT04",
            duration: "70 minutes",
            format: "Groups of 3-4",
            shortDescription: "Students create detailed user personas using Figma based on case studies.",
            description: "Students create detailed user personas using Figma based on given case studies, enhancing understanding of user-centered design.",
            materialsNeeded: [
              "Figma accounts",
              "Persona templates",
              "Case study details",
              "Access to online research tools"
            ],
            steps: [
              "Introduce the concept of user personas and their role in design (5 minutes)",
              "Present the case study and discuss initial thoughts (5 minutes)",
              "Groups research potential users based on the case study (15 minutes)",
              "Identify and categorize user groups with distinct characteristics (10 minutes)",
              "Use Figma to create detailed personas using the provided template (25 minutes)",
              "Write a brief bio for each persona, considering goals and pain points (5 minutes)",
              "Groups present one persona to the class, explaining their design choices (5 minutes)"
            ],
            variations: [
              "Use different design tools (e.g., Sketch, Adobe XD) based on availability",
              "Incorporate role-playing exercises where students embody their personas",
              "Extend the activity by using the personas to design a product or service"
            ]
          },
          {
            title: "Prime Numbers Challenge",
            icon: "🔢",
            tags: ["individual", "understand", "apply"],
            durationCategory: "Student-Created Activities",
            author: "Spring24-T01-MT03",
            duration: "30 minutes",
            format: "Individual",
            shortDescription: "Students write Python code to identify prime numbers, practicing loop implementation.",
            description: "Students practice using loops in Python to identify prime numbers between 1 and 101.",
            materialsNeeded: [
              "Computer with Python IDE or online Python editor"
            ],
            steps: [
              "Introduce the concept of prime numbers and how loops can be used to identify them (5 minutes)",
              "Provide the task instructions to the students",
              "Students implement the code using either a \"for loop\" or \"while loop\" (15 minutes)",
              "Circulate to assist and debug as needed (5 minutes)",
              "Review the solutions as a class, discussing different approaches (5 minutes)"
            ],
            variations: [
              "Modify the range of numbers to increase or decrease difficulty",
              "Challenge students to optimize their code for efficiency",
              "Extend the activity to identify twin primes or prime factorization"
            ]
          }
            {
          title: "Code Along: Recursive Functions",
          icon: "💻🔄",
          tags: ["pair", "understand", "apply"],
          durationCategory: "Quick Activities (5-15 minutes)",
          author: "Fall24-T01-MT07",
          duration: "10 minutes",
          format: "Individual coding with instructor guidance",
          shortDescription: "Students implement a recursive function while following along with the instructor, applying theoretical concepts in real-time.",
          description: "Students implement a recursive function (factorial) in a programming environment while following along with the instructor, applying theoretical concepts in real-time.",
          whyUseIt: "Provides hands-on practice with coding concepts, reinforces understanding through application, allows immediate feedback and correction.",
          materialsNeeded: [
            "Programming environment (e.g., Programiz)",
            "Visual aids showing factorial definition and recursive structure",
            "Polling tool for interactive questions (e.g., Mentimeter)"
          ],
          steps: [
            "Set up the coding environment and explain the goal (2 minutes)",
            "Conduct interactive questioning about recursive concepts using polling tools (2 minutes)",
            "Guide students through implementing the factorial function step-by-step (4 minutes)",
            "Debrief by discussing challenges and common mistakes (2 minutes)"
          ],
          variations: [
            "Adapt for different programming languages",
            "Use different recursive problems (Fibonacci sequence, etc.)",
            "Add complexity by implementing error handling for negative inputs"
          ],
          tips: "Prepare a 'cheat sheet' with common commands and syntax for reference. Have TAs circulate to help students who fall behind. Consider programming-related accessibility needs."
        }
        {
          title: "AI in Action",
          icon: "🤖🔍",
          tags: ["group", "apply", "evaluate"],
          durationCategory: "Medium Activities (15-30 minutes)",
          author: "Fall24-T05-MT07",
          duration: "20-25 minutes",          
          format: "Small group exploration and presentation",
          shortDescription: "Students work in groups to experiment with AI tools for specific tasks, then analyze performance and share insights.",
          description: "Students work in groups to use different AI agents for assigned tasks, analyze their performance, and present findings to the class.",
          whyUseIt: "Provides hands-on experience with AI tools, encourages critical thinking about AI capabilities and limitations, fosters collaborative learning.",
          materialsNeeded: [
            "Access to AI platforms (e.g., Coze)",
            "Task assignments for each group",
            "Evaluation criteria for AI performance"
          ],
          steps: [
            "Divide class into small groups and assign each an AI tool or task",
            "Groups experiment with their assigned AI agents for the given task",
            "Students document observations about AI performance and limitations",
            "Groups present their findings to the class",
            "Facilitate a class discussion on AI applications and limitations"
          ],
          variations: [
            "Compare multiple AI tools on the same task",
            "Focus on specific domains (writing, image generation, data analysis)",
            "Extend with a debate on ethical considerations of AI use"
          ],
          tips: "Ensure tasks are appropriately challenging but achievable. Provide clear evaluation criteria for analyzing AI performance. Prepare backup plans in case of technical issues."
        }
        {
          title: "Math Competition: AI vs Humans",
          icon: "🧮🤖",
          tags: ["group", "apply", "evaluate"],
          durationCategory: "Medium Activities (15-30 minutes)",
          duration: "20-30 minutes",
          author: "Fall24-T05-MT07",
          format: "Competitive group activity",
          shortDescription: "Students compete with AI in solving math problems, then analyze the differences in approach and accuracy.",
          description: "Groups solve math problems alongside AI tools, then compare solutions to understand AI's approach to logical problems, strengths, and limitations.",
          whyUseIt: "Demonstrates AI capabilities in logical problem-solving, highlights differences between human and AI thinking processes, encourages critical analysis of technology.",
          materialsNeeded: [
            "Set of math problems of varying difficulty",
            "Access to AI tools",
            "Timing device",
            "Worksheets for documenting solutions and observations"
          ],
          steps: [
            "Divide students into groups and distribute math problems",
            "Groups solve problems while also inputting them into AI tools",
            "Students document both human and AI solutions, noting differences in approach",
            "Compare accuracy and efficiency between human and AI methods",
            "Groups present key observations about AI's performance and limitations",
            "Class discussion on implications for AI use in educational settings"
          ],
          variations: [
            "Use different types of problems (algebraic, geometric, word problems)",
            "Add time pressure to test efficiency",
            "Include problems designed to challenge AI's current limitations"
          ],
          tips: "Select problems that showcase both AI strengths and weaknesses. Emphasize that the goal is not just to see who 'wins' but to understand different approaches to problem-solving."
        }
        {
          title: "Organelle Role-Play",
          icon: "🔬🎭",
          tags: ["group", "apply", "analyze", "create"],
          durationCategory: "Medium Activities (15-30 minutes)",
          author: "Fall24-T05-MT08",   
          duration: "20-30 minutes",
          format: "Small group role-play and case analysis",
          shortDescription: "Student groups represent different cellular organelles and analyze how they would respond to a physiological challenge.",
          description: "Student groups each represent a specific organelle and analyze how it would respond to a hypothetical scenario involving external toxins, applying their knowledge of cellular biology.",
          whyUseIt: "Transforms abstract cellular concepts into tangible roles, encourages application of knowledge to novel situations, promotes collaborative problem-solving.",
          materialsNeeded: [
            "Organelle assignment cards (nucleus, mitochondria, endoplasmic reticulum, lysosomes, Golgi apparatus)",
            "Scenario description handouts",
            "Paper for documenting analysis",
            "Reference materials on organelle functions (optional)"
          ],
          steps: [
            "Divide students into groups of four",
            "Randomly assign each group an organelle to represent",
            "Present the hypothetical scenario: 'A cell is attacked by external toxins'",
            "Groups discuss and document how their assigned organelle would respond",
            "Each group presents their analysis to the class",
            "Facilitate discussion on integrated cellular responses and knowledge application"
          ],
          variations: [
            "Use different scenarios (viral infection, temperature change, nutrient deprivation)",
            "Extend to include interactions between organelles",
            "Add a visual component where groups create diagrams of their organelle's response"
          ],
          tips: "Encourage creative yet scientifically sound responses. Remind students that while there may not be strict right/wrong answers, their analysis should be logically justified based on known organelle functions."
        }
        ];


    // Include other activities here following the same structure
