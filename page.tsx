import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Award, BookOpen, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-20">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">About SXG</h1>
            <p className="text-xl text-gray-600 mb-6">
              We're on a mission to make high-quality tech education accessible, practical, and aligned with industry
              needs.
            </p>
            <p className="text-gray-600 mb-6">
              Founded in 2020, SXG has helped thousands of students transform their careers through our innovative
              approach to technical education. We combine industry expertise, hands-on learning, and personalized
              support to ensure your success.
            </p>
            <p className="text-gray-600 mb-6">
              Our programs are designed by industry experts who understand what employers are looking for, and our
              curriculum is constantly updated to reflect the latest technologies and best practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">Meet Our Team</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Join Our Mission
              </Button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="About SXG"
              width={800}
              height={600}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Users className="h-10 w-10 text-blue-600" />,
                title: "Student-Centered",
                description: "We put our students first in everything we do, from curriculum design to career support.",
              },
              {
                icon: <Award className="h-10 w-10 text-blue-600" />,
                title: "Excellence",
                description: "We strive for excellence in our teaching, our content, and our student outcomes.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-blue-600" />,
                title: "Continuous Learning",
                description:
                  "We believe in lifelong learning and constantly update our curriculum to reflect industry needs.",
              },
              {
                icon: <Globe className="h-10 w-10 text-blue-600" />,
                title: "Inclusivity",
                description: "We're committed to making tech education accessible to people from all backgrounds.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-md">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Impact</h2>
          <div className="grid gap-8 md:grid-cols-3 text-center">
            {[
              { number: "15,000+", label: "Graduates" },
              { number: "92%", label: "Job Placement Rate" },
              { number: "$25K", label: "Average Salary Increase" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 shadow-md">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

